// Represents a single weight entry for a user
// This interface defines the structure of a weight record, including its unique identifier, the weight value, and the date it was recorded.
export interface Weight {
  _id: string;
  weight: number;
  recordedDate: Date;
}
