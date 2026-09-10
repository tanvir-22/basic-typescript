export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const tasks: Task[] = []; //empty array of object
export let lastid: number = 0;

export function getNextId(): number {
  return lastid++;
}

export function createTask() {
  const samples: Omit<Task, "id">[] = [
    { title: "refuel the bike", completed: false },
    { title: "go to school", completed: false },
    { title: "do the homework", completed: false },
    { title: "play rdr2", completed: false },
  ];
  samples.forEach((taskitem) => {
    tasks.push({
      id: lastid++,
      title: taskitem.title,
      completed: taskitem.completed,
    });
  });
}