import { finished } from "stream";

function iteratie(index) {
  if(index === tasks.lenght) {
    finished()
  }

  const task = tasks[index]

  task(() => iteratie(index + 1))
}
