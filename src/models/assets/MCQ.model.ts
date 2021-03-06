import { AssetTypeEnum } from './AssetType.enum';
import { AssetModel } from './Asset.model';

export type AnswerCode = 'A' | 'B' | 'C' | 'D' | 'E' | null | undefined;

export interface MCQAnswer {
  id: AnswerCode;
  value: string;
}

export interface MCQModel extends AssetModel {
  question: string;
  options: MCQAnswer[];
  correctAnswerId: AnswerCode[]; //only 1 item will be there in the array in
  // case of single select answer.
}

const mcqQuestion: MCQModel = {
  uid: null,
  assetType: AssetTypeEnum.YOUTUBE,
  comments: '123123',
  correctAnswerId: ['A'],
  createdByUserUid: 'myuid',
  createTimestamp: new Date(),
  options: [
    { id: 'A', value: '1' },
    { id: 'B', value: '3' },
    { id: 'C', value: '5' },
    { id: 'D', value: '7' },
  ],
  question: "How many fingers in a man's left hand?",
  tags: [],
};
