import React, { useState, useEffect } from "react";

import { ReminderList } from "./components/ReminderList";
import { NewReminder } from "./components/NewReminder";

import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
import "./App.css";

function App() {
  const [reminders, setReminder] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminder(reminders);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  const deleteReminder = (id: number) => {
    setReminder(reminders.filter((r) => r.id !== id));
  };

  const addRemider = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    console.log(
      "🚀 ~ file: App.tsx:32 ~ addRemider ~ newReminder:",
      newReminder
    );
    setReminder([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <h1>Reminder app</h1>
      <p>
        The intent of this app is to show how to properly setup and integrate
        typescript in a ReactJS project
      </p>
      <NewReminder onAddReminder={addRemider} />
      <ReminderList items={reminders} onDeleteReminder={deleteReminder} />
    </div>
  );
}

export default App;
