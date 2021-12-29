export class Todo {
  constructor(
    public task: string,
    public date: string,
    public time: string,
    public priority: string,
    public isCompleted: boolean,
    public description: string,
    public user: string
  ) { }
}