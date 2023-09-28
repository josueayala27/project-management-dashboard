export type People = {
  full_name: string;
  photo: string;
};

export interface TaskLabel {
  name: string;
  color: string;
}

export interface TaskFile {
  name: "Design_System_V2";
  extension: "fig";
}

export interface Task {
  title: string;
  label: TaskLabel;
  image: string | null;
  people: People[];
  files: TaskFile[];
  reports: number;
  comments: number;
  due_date: string | null;
}

export interface BoardColumnStatus {
  label: string;
  color: "gray" | "orange" | "green" | "purple";
}

export interface Column {
  status: BoardColumnStatus;
  tasks: Task[];
}
