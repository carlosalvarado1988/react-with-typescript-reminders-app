import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
  // baseURL: "https://jsonplaceholder.typicode.com",
  http = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });

  async getReminders() {
    // const response = await this.http.get<Reminder[]>("/todos");
    try {
      const response = await this.http.get<Reminder[]>("/reminders");
      return response.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async addReminder(title: string) {
    const response = await this.http.post<Reminder>("/reminders", { title });
    return response.data;
  }

  async removeReminder(id: string) {
    const response = await this.http.delete("/reminders" + id);
    return response.data;
  }
}

const reminderServiceInstance = new ReminderService();
export default reminderServiceInstance;
