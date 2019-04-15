export interface Place {
    PlaceId?: number;
    PlaceName: string;
    PlaceLocation: string;
    PlaceDescription: string;
    PlaceImageUrl: string;
    SubmittedUTC?: Date;
    ModifiedUTC?: Date;
    SubmittingUserId?: number;
    ModifyingUserId?: number;
}