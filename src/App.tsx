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
    setReminder([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addRemider} />
      <ReminderList items={reminders} onDeleteReminder={deleteReminder} />
    </div>
  );
}

export default App;
