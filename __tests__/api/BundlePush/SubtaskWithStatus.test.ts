import { SubtaskWithStatus } from "../../../src/api/BundlePush/SubtaskWithStatus";
import { TaskStage, ITaskWithStatus, TaskProgress } from "@zowe/imperative";


let parentTask: ITaskWithStatus;

describe("SubtaskWithStatus", () => {

    beforeEach(() => {
        parentTask =  {
            percentComplete: 0,
            statusMessage: "status",
            stageName: TaskStage.IN_PROGRESS
        };
    });
    it("Should fail with ticks < 0", () => {
        expect(() => {
            const task = new SubtaskWithStatus(parentTask, -1);
        }).toThrow("Ticks must be between 0 and 100");
    });

    it("Should fail with ticks > 0", () => {
        expect(() => {
            const task = new SubtaskWithStatus(parentTask, 101);
        }).toThrow("Ticks must be between 0 and 100");
    });

    it("Should set the parent task status", () => {
        const subTask = new SubtaskWithStatus(parentTask, 20);
        subTask.statusMessage = "Message from subtask";
        expect(parentTask.statusMessage).toEqual("Message from subtask");
    });

    it("Should set the parent task stage", () => {
        const subTask = new SubtaskWithStatus(parentTask, 20);
        subTask.stageName = TaskStage.FAILED;
        expect(parentTask.stageName).toEqual(TaskStage.FAILED);
    });

    it("Should not set the parent task to completed", () => {
        const subTask = new SubtaskWithStatus(parentTask, 20);
        subTask.stageName = TaskStage.COMPLETE;
        expect(parentTask.stageName).toEqual(TaskStage.IN_PROGRESS);
    });

    it("Should not set the parent task to NOT_STARTED", () => {
        const subTask = new SubtaskWithStatus(parentTask, 20);
        subTask.stageName = TaskStage.NOT_STARTED;
        expect(parentTask.stageName).toEqual(TaskStage.IN_PROGRESS);
    });

    it("should set percentComplete on parent task using scaled value", () => {
        const subTask = new SubtaskWithStatus(parentTask, 20);
        subTask.percentComplete = TaskProgress.FIFTY_PERCENT;
        expect(parentTask.percentComplete).toEqual(TaskProgress.TEN_PERCENT);
    });

    it("should add to percentComplete on parent task using scaled value", () => {
        const subTask = new SubtaskWithStatus(parentTask, 40);
        parentTask.percentComplete = 50;
        subTask.percentComplete = TaskProgress.FIFTY_PERCENT;
        expect(parentTask.percentComplete).toEqual(TaskProgress.SEVENTY_PERCENT);
    });

    it("should add to percentComplete on parent task using scaled value multiple times", () => {
        const subTask = new SubtaskWithStatus(parentTask, 40);
        parentTask.percentComplete = TaskProgress.FIFTY_PERCENT;
        subTask.percentComplete = 25;
        subTask.percentComplete = 50;
        subTask.percentComplete = 75;
        expect(parentTask.percentComplete).toEqual(TaskProgress.EIGHTY_PERCENT);
    });

    it("should return subtask percentage complete", () => {
        const subTask = new SubtaskWithStatus(parentTask, 40);
        subTask.percentComplete = 50;
        expect(subTask.percentComplete).toEqual(50);
    });
});
