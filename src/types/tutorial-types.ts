import { EditorFrameObjects } from "./types";

export interface TutorialObject{
    name: string;
    difficulty: number;
    url: string;
    initialState: EditorFrameObjects;
    tests: TestObjects
}

export interface TestObject{
    name: string;
    description: string;
    extraInfo: string;
    test: string;
    complete: boolean;
}

export interface TutorialObjects {
    [id: string]: TutorialObject;
}

export interface TestObjects{
    [id: number]: TestObject;
}