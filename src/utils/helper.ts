import { app } from "../config/app";
import { UserType } from "../store/types/UserTypes";

export const isoStringToDate = (dateString: string) => {
  // Extract relevant parts
  const year = parseInt(dateString.substring(0, 4));
  const month = parseInt(dateString.substring(5, 2)) - 1; // Months are zero-based
  const day = parseInt(dateString.substring(8, 2));
  const hours = parseInt(dateString.substring(11, 2));
  const minutes = parseInt(dateString.substring(14, 2));
  const seconds = parseInt(dateString.substring(17, 2));
  const milliseconds = parseFloat(dateString.substring(20, 6));

  // Create Date object
  const date = new Date(year, month, day, hours, minutes, seconds, milliseconds);

  return date
}

export const createId = (total: number) => {
  const arrayOfObjects = [];

  for (let i = 0; i < total; i++) {
    arrayOfObjects.push({ id: i });
  }

  return arrayOfObjects;
}

export const profilePhoto = (user: UserType) => {
  return user.photo ? `https://eduwork.id/storage/user/${user.id}/${user.photo}`: "https://eduwork.id/images/avatar/noimage.jpg"
}