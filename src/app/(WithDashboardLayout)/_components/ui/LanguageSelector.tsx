import React from "react";
import { Button } from "@/components/ui/button/Button";

interface LanguageSelectorProps {
  selectedLanguage: "en" | "bn";
  onLanguageChange: (language: "en" | "bn") => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex-row gap-2 my-4 justify-center rounded-full bg-gray-50 px-6 py-2 flex gpa-5 w-full mx-auto">
      <Button
        className="rounded-xl"
        title="English"
        variant={selectedLanguage === "en" ? "primary" : "outline"}
        onClick={() => onLanguageChange("en")}
        size="sm"
      />
      <Button
        className="rounded-xl"
        title="Bangla"
        variant={selectedLanguage === "bn" ? "primary" : "outline"}
        onClick={() => onLanguageChange("bn")}
        size="sm"
      />
    </div>
  );
};
