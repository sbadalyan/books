import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "./rootParams";

export type ScreenProps<T extends keyof RootParamList> = NativeStackScreenProps<RootParamList, T>;
