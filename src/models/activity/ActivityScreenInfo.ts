import { AssetModel } from "../assets/Asset.model";
import {IsNotEmpty, IsArray} from "class-validator";
import { ActivityTypeEnum } from './ActivityType.enum';


export class ActivityScreenInfo {
  uid: string; //generated by mongoDB

  @IsNotEmpty()
  motherActivityId: ActivityTypeEnum; //examples ActivityType.MessageFromChild:

  @IsNotEmpty()
  timePeriod: string; //example "D1" "W1" "M2"

  @IsArray()
  assets: AssetModel[] | string[];
}