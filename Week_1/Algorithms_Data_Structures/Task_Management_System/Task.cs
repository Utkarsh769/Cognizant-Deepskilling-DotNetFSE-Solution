public class Task {
    private string taskId;
    private string taskName;
    private string status;

    public Task(string taskId, string taskName, string status) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
    }

    public string GetTaskId() { return taskId; }

    public override string ToString() {
        return $"Task ID: {taskId} | Name: {taskName} | Status: {status}";
    }
}