import { AvatarData } from "../AvatarSelection";
import { AvatarSize } from "../../../../common.type";
interface CountAvatarProp {
    size?: AvatarSize;
    hiddenAvatarCount?: number;
    hiddenAvatarList: AvatarData[];
    avatarStyle?: {
        backgroundColor?: string;
        boxShadow?: string;
    };
}
export declare const AvatarSelectionCount: (props: CountAvatarProp) => JSX.Element;
export default AvatarSelectionCount;
