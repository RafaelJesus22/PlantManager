import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/core';
import { format } from 'date-fns';


export interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  },
  dateTimeNotification: Date;
}

interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
  }
}

export const savePlant = async (plant: PlantProps): Promise<void> => {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};
    // const navigation = useNavigation();

    const newPlant = {
      [plant.id]: {
        data: plant,
      }
    }

    await AsyncStorage.setItem('@plantmanager:plants',
      JSON.stringify({
        ...newPlant,
        ...oldPlants
      })
    );

    // navigation.navigate('Confirmation', {
    //   title: 'Tudo certo',
    //   subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado',
    //   buttonTitle: 'Muito obrigado',
    //   icon: 'hug',
    //   nextScreen: 'MyPlants',
    // });

  } catch (err) {
    console.log('erro da função', err)
    throw new Error(err);
  }
}

export const loadPlant = async (): Promise<PlantProps[]> => {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const plantsSorted = Object
    .keys(plants)
    .map(plant => {
      return {
        ...plants[plant].data,
        hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
      }
    })
    .sort((a, b) =>
      Math.floor(
        new Date(a.dateTimeNotification).getTime() / 1000 -
        Math.floor(new Date(b.dateTimeNotification).getTime() - 1000)
      )
    )

    return plantsSorted;
  } catch (err) {
    throw new Error(err);
  }
}