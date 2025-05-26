"use client";

import React, { useState } from "react";
import { PageHeader } from "../../ui/PageHeader";
import InputField from "@/components/ui/form/InputField";
import { ImageUpload } from "../../ui/ImageUpload";
import { Button } from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";
import { Toggle } from "../../ui/Toggle";
import { LanguageSelector } from "../../ui/LanguageSelector";

export const AddAuthor = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    phoneNumber: "",
    email: "",
    isActive: true,
    firstName: "",
    lastName: "",
    organization: "",
    designation: "",
    position: "",
    details: "",
    image: "",
  });
  const router = useRouter();

  const [language, setLanguage] = useState<"en" | "bn">("en");

  const handleSubmit = () => {
    console.log("Form submitted:", { ...formData, language });
  };

  return (
    <div className="flex-1 bg-white p-3 overflow-y-auto">
      <PageHeader title="Create Author" onBack={() => router.back()} />

      <div className="max-w-full">
        <ImageUpload
          value={formData.image}
          onChange={(value) => setFormData({ ...formData, image: value })}
        />

        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex-1 min-w-[250px]">
            <InputField
              label="User Name"
              required
              value={formData.userName}
              onChangeText={(text) =>
                setFormData({ ...formData, userName: text })
              }
              placeholder="Enter user name"
            />
          </div>

          <div className="flex-1 min-w-[250px]">
            <InputField
              label="Password"
              required
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              placeholder="Create password"
              type="password"
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex-1 min-w-[250px]">
            <InputField
              label="Phone Number"
              value={formData.phoneNumber}
              onChangeText={(text) =>
                setFormData({ ...formData, phoneNumber: text })
              }
              placeholder="Enter phone number"
              type="tel"
              inputMode="tel"
            />
          </div>

          <div className="flex-1 min-w-[250px]">
            <InputField
              label="Email"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="Enter email"
              type="email"
              inputMode="email"
            />
          </div>
        </div>

        <div className="mb-4">
          <Toggle
            onChange={() => {}}
            value={formData.isActive}
            label="Active Status"
          />
        </div>

        <LanguageSelector
          selectedLanguage={language}
          onLanguageChange={setLanguage}
        />
        <div className="flex flex-row flex-wrap gap-4 mt-4">
          <div className="flex-1 min-w-[250px]">
            <InputField
              label="First Name"
              required
              value={formData.firstName}
              onChangeText={(text) =>
                setFormData({ ...formData, firstName: text })
              }
              placeholder="Enter first name"
            />
          </div>

          <div className="flex-1 min-w-[250px]">
            <InputField
              label="Last Name"
              required
              value={formData.lastName}
              onChangeText={(text) =>
                setFormData({ ...formData, lastName: text })
              }
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex-1 min-w-[250px]">
            <InputField
              label="Organization"
              value={formData.organization}
              onChangeText={(text) =>
                setFormData({ ...formData, organization: text })
              }
              placeholder="Enter organization name"
            />
          </div>

          <div className="flex-1 min-w-[250px]">
            <InputField
              label="Designation"
              value={formData.designation}
              onChangeText={(text) =>
                setFormData({ ...formData, designation: text })
              }
              placeholder="Enter designation"
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex-1 min-w-[250px]">
            <InputField
              label="Position"
              value={formData.position}
              onChangeText={(text) =>
                setFormData({ ...formData, position: text })
              }
              placeholder="Enter position"
            />
          </div>
        </div>

        <InputField
          label="Details"
          value={formData.details}
          onChangeText={(text) => setFormData({ ...formData, details: text })}
          placeholder="Write..."
          type="textarea"
          numberOfLines={4}
        />

        <div className="flex flex-row justify-end mt-6 gap-4">
          <Button
            className="w-full rounded-lg"
            title="Submit"
            onClick={handleSubmit}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};
