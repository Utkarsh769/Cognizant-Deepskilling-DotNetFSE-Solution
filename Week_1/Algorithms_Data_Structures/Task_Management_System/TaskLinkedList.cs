using System;

public class TaskLinkedList {
    private class Node {
        public Task task;
        public Node next;

        public Node(Task task) {
            this.task = task;
            this.next = null;
        }
    }

    private Node head = null;

    public void AddTask(Task task) {
        Node newNode = new Node(task);
        if (head == null) {
            head = newNode;
        } else {
            Node temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        Console.WriteLine("Task Added: " + task.GetTaskId());
    }

    public Task SearchTask(string taskId) {
        Node temp = head;
        while (temp != null) {
            if (temp.task.GetTaskId() == taskId) {
                return temp.task;
            }
            temp = temp.next;
        }
        return null;
    }

    public void TraverseTasks() {
        Console.WriteLine("\n--- Traversing Task List ---");
        Node temp = head;
        while (temp != null) {
            Console.WriteLine(temp.task);
            temp = temp.next;
        }
    }

    public void DeleteTask(string taskId) {
        if (head == null) return;

        if (head.task.GetTaskId() == taskId) {
            head = head.next;
            Console.WriteLine("Deleted task ID: " + taskId);
            return;
        }

        Node current = head;
        Node previous = null;

        while (current != null && current.task.GetTaskId() != taskId) {
            previous = current;
            current = current.next;
        }

        if (current != null) {
            previous.next = current.next;
            Console.WriteLine("Deleted task ID: " + taskId);
        } else {
            Console.WriteLine("Task ID not found.");
        }
    }
}