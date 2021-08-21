//Making a struct/class that tells you what the interface 'Task' will include
export interface Task{
    id?: number; //?: means that the variable is optional
    text: string;
    day: string;
    reminder: boolean;
}