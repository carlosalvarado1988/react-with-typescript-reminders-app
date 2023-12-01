import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
  onDeleteReminder: (id: number) => void;
}
export const ReminderList = ({
  items,
  onDeleteReminder,
}: ReminderListProps) => {
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title}
            <button
              className="btn btn-outline-danger mx-3"
              onClick={() => onDeleteReminder(item.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
