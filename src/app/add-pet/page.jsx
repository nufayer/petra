"use client"

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from '@heroui/react';
import React, { use } from 'react';

const AddPetPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const pet = Object.fromEntries(formData.entries());

        console.log(pet);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pet)
        })

        const data = await res.json();

        console.log(data);
        // Handle form submission logic here
    }
    return (
        <div>
            <form
            onSubmit={onSubmit}
            className="p-10 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pet Name */}
              <div className="md:col-span-2">
                <TextField name="petName" isRequired>
                  <Label>Pet Name</Label>
                  <Input placeholder="Provide a name for your pet" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Species */}
              <TextField name="species" isRequired>
                <Label>Species</Label>
                <Input placeholder="Cat/Dog/Bird..." className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Location - Updated Select Component */}
              <div>
                <Select
                  name="location"
                  isRequired
                  className="w-full"
                  placeholder="Select location"
                >
                  <Label>Location</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Dhaka" textValue="Dhaka">
                        Dhaka
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Chittagong" textValue="Chittagong">
                        Chittagong
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Sylet" textValue="Sylet">
                        Sylet
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Barisal" textValue="Barisal">
                        Barisal
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Rajshahi" textValue="Rajshahi">
                        Rajshahi
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Rongpur" textValue="Rongpur">
                        Rongpur
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Khulna" textValue="Khulna">
                        Khulna
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mymensingh" textValue="Mymensingh">
                        Mymensingh.
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Adoption Fee */}
              <TextField name="adoptionFee" type="number" isRequired>
                <Label>Adoption Fee (BDT)</Label>
                <Input
                  type="number"
                  placeholder="100"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Gender - Updated Select Component */}
              <div>
                <Select
                  name="gender"
                  isRequired
                  className="w-full"
                  placeholder="Select gender"
                >
                  <Label>Gender</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Male" textValue="Male">
                        Male
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Female" textValue="Female">
                        Female
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Age */}
              <TextField name="age" type="number" isRequired>
                <Label>Age</Label>
                <Input placeholder="Enter age" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Breed */}
              <TextField name="breed" isRequired>
                <Label>Breed</Label>
                <Input placeholder="What breed is your pet?" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Health Status */}
              <TextField name="healthStatus" isRequired>
                <Label>Health Status</Label>
                <Input placeholder="Healthy/Sick..." className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Vaccination Status */}
              <div>
                <Select
                  name="vaccinationStatus"
                  isRequired
                  className="w-full"
                  placeholder="Select vaccination status"
                >
                  <Label>Vaccination Status</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                        Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Not-Vaccinated" textValue="Not-Vaccinated">
                        Not Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Owner Email */}
              <div className="md:col-span-2">
                <TextField name="ownerEmail" type="email" isRequired>
                  <Label>Owner Email</Label>
                  <Input type="email" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              
              className=" rounded-none w-full bg-blue-500 text-white"
            >
              Add Pet
            </Button>
          </form>
        </div>
    );
};

export default AddPetPage;