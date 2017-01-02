export enum MarkType {
    None,
    Entry,
    External,
    FinalExam,
    Homework,
    Verbal,
    Project,
    Term,
    Regular,
}

export const MarkTypesAsString = Object.keys(MarkType)
    .map(s => MarkType[s])
    .filter(v => typeof v === 'string' && v !== 'None');

