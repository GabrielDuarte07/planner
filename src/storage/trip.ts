import AsyncStorage from "@react-native-async-storage/async-storage";

const TRIP_STORAGE_KEY = "@planner:tripId";

async function save(tripId: string) {
  try {
    await AsyncStorage.setItem(TRIP_STORAGE_KEY, tripId);
  } catch (error: unknown) {
    throw error;
  }
}

async function get() {
  try {
    const tripID = await AsyncStorage.getItem(TRIP_STORAGE_KEY);
    return tripID;
  } catch (error: unknown) {
    throw error;
  }
}

async function remove() {
  try {
    await AsyncStorage.removeItem(TRIP_STORAGE_KEY);
  } catch (error: unknown) {
    throw error;
  }
}

export default { save, get, remove };
