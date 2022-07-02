import getEnvVars from "../../environment";
import { doGet, doPost } from "./api";

const { API_GET_LISTOFCOURSES } = getEnvVars();

export default class CoursesService {
  static async getCourses() {
    try {
      const response = await doGet(API_GET_LISTOFCOURSES);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
