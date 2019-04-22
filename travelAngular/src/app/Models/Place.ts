import { Tag } from "./Tag";

export interface Place {
    PlaceId?: string;
    PlaceName: string;
    PlaceLocation: string;
    PlaceDescription: string;
    PlaceImageUrl?: string;
    SubmittedUTC?: Date;
    ModifiedUTC?: Date;
    SubmittingUserId?: string;
    ModifyingUserId?: string;
    Tags?: Tag[];
}