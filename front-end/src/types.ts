import type React from "react";
import { Mail, Lock, Check, Eye, EyeClosed, User } from "lucide-react";

export type comumValues = {
	bgColour: string;
	buttonColour: string;
	fontColour: string;
	fontColour2:string;
	headerTextColour: string;
	titleFormat: string;
	center: string;
	logo: string;
	box: string;
	input: string;
	inputCuston: string;
	iconsCuston: string;
	mailIcon: React.ElementType;
	passIcon: React.ElementType;
	checkIcon: React.ElementType;
	canSeePassIcon: React.ElementType;
	cantSeePassIcon: React.ElementType;
	userIcon: React.ElementType;
};

export const std: comumValues = {
  bgColour: "bg-slate-950",
  buttonColour: "bg-blue-500",
  fontColour: "text-white",
  fontColour2: "text-black",
  headerTextColour: "text-white",
  titleFormat: "font-bold text-3xl",
  center: "flex justify-center items-center",
  logo: "src/assets/react.svg",
  box: "flex flex-col bg-white border border-slate-700 shadow-md rounded-md",
  input: "bg-slate-200 border rounded-md",
  inputCuston: "flex items-center bg-slate-200 gap-4 p-2 shadow-md",
  iconsCuston: "text-blue-500 w-15 h-15 stroke-current",
  mailIcon: Mail,
  passIcon: Lock,
  checkIcon: Check,
  canSeePassIcon: Eye,
  cantSeePassIcon: EyeClosed,
  userIcon: User,
};
