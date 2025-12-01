import React from 'react';
import FileUploadButton from '../FileUpload';
import Input from '../../ui/Input';
import PhotoUpload from '../PhotoUpload';
import Select from '../../ui/Select';
import GenderButton from '../../ui/GenderButton';
import TextArea from '../../ui/TextArea';
import { FormData } from '@/app/types/form.type';


interface PersonalInformationProps {
  formData: FormData;
  onInputChange: (field: string, value: any) => void;
  onFileUpload: (field: 'photo' | 'resume', file: File) => void;
}

export const PersonalInformation: React.FC<PersonalInformationProps> = ({
  formData,
  onInputChange,
  onFileUpload
}) => {
  return (
    <div className="space-y-4">
      {/* Auto fill-in section */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-3">Auto fill-in</p>
        <div className="flex gap-4 mb-4">
          <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-400">
              <div className="w-16 h-20 mx-auto mb-2 border border-gray-300 rounded" />
              <p className="text-xs">Resume Preview</p>
            </div>
          </div>
          <FileUploadButton
            onFileSelect={(file) => onFileUpload('resume', file)}
            accept=".pdf,.docx"
            label="Upload resume"
          />
        </div>
        <p className="text-xs text-gray-500 text-center mb-4">Accepted file types: PDF, docx</p>
        <p className="text-center text-gray-500 text-sm">Or</p>
      </div>

      {/* Photo upload */}
      <PhotoUpload
        photo={formData.photo}
        onPhotoSelect={(file) => onFileUpload('photo', file)}
      />
      <p className="text-xs text-gray-500 text-center mb-6">Accepted file types: JPG, PNG</p>

      {/* Form fields */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => onInputChange('firstName', e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => onInputChange('lastName', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="email"
          placeholder="Email (School ID)"
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => onInputChange('phone', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="tel"
          placeholder="Alternate Phone"
          value={formData.alternatePhone}
          onChange={(e) => onInputChange('alternatePhone', e.target.value)}
        />
        <Select
          value={formData.city}
          onChange={(e) => onInputChange('city', e.target.value)}
        >
          <option value="">City</option>
          <option value="ahmedabad">Ahmedabad</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
        </Select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Input
          type="date"
          placeholder="Date Of Birth"
          value={formData.dateOfBirth}
          onChange={(e) => onInputChange('dateOfBirth', e.target.value)}
        />
        <GenderButton
          selected={formData.gender === 'male'}
          onClick={() => onInputChange('gender', 'male')}
        >
          Male
        </GenderButton>
        <GenderButton
          selected={formData.gender === 'female'}
          onClick={() => onInputChange('gender', 'female')}
        >
          Female
        </GenderButton>
      </div>

      <TextArea
        placeholder="About Me"
        rows={4}
        value={formData.about}
        onChange={(e) => onInputChange('about', e.target.value)}
      />
    </div>
  );
};