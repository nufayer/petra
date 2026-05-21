"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea} from "@heroui/react";

export function EditModal({pet}) {
    const {_id, imageUrl, petName, species, location, adoptionFee, gender, age, breed, healthStatus, vaccinationStatus, description, ownerEmail} = pet;

        const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const pet = Object.fromEntries(formData.entries());


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet/${_id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pet)
         })

        const data = await res.json();
        console.log(data);

        console.log(data);
        // Handle form submission logic here
    }
  return (
    <Modal>
      <div className='flex justify-end gap-3'>
                  <Button variant='outline' className={'rounded-none mt-5 mb-3'}>Edit</Button>
              </div>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Pet Details</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                                                   <form
                                                               onSubmit={onSubmit}
                                                               className="p-10 space-y-8"
                                                             >
                                                               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                                 {/* Pet Name */}
                                                                 <div className="md:col-span-2">
                                                                   <TextField defaultValue={petName} name="petName" isRequired>
                                                                     <Label>Pet Name</Label>
                                                                     <Input />
                                                                     <FieldError />
                                                                   </TextField>
                                                                 </div>
                                                   
                                                                 {/* Species */}
                                                                 <TextField defaultValue={species}  name="species" isRequired>
                                                                   <Label>Species</Label>
                                                                   <Input />
                                                                   <FieldError />
                                                                 </TextField>
                                                   
                                                                 {/* Location - Updated Select Component */}
                                                                 <div>
                                                                   <Select
                                                                     defaultValue={location}
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
                                                                 <TextField defaultValue={adoptionFee} name="adoptionFee" type="number" isRequired>
                                                                   <Label>Adoption Fee (BDT)</Label>
                                                                   <Input/>
                                                                   <FieldError />
                                                                 </TextField>
                                                   
                                                                 {/* Gender - Updated Select Component */}
                                                                 <div>
                                                                   <Select
                                                                     defaultValue={gender}
                                                                     name="gender"
                                                                     isRequired
                                                                     className="w-full"
                                                                     
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
                                                                 <TextField defaultValue={age} name="age" type="number" isRequired>
                                                                   <Label>Age</Label>
                                                                   <Input />
                                                                   <FieldError />
                                                                 </TextField>
                                                   
                                                                 {/* Breed */}
                                                                 <TextField defaultValue={breed} name="breed" isRequired>
                                                                   <Label>Breed</Label>
                                                                   <Input />
                                                                   <FieldError />
                                                                 </TextField>
                                                   
                                                                 {/* Health Status */}
                                                                 <TextField defaultValue={healthStatus} name="healthStatus" isRequired>
                                                                   <Label>Health Status</Label>
                                                                   <Input />
                                                                   <FieldError />
                                                                 </TextField>
                                                   
                                                                 {/* Vaccination Status */}
                                                                 <div>
                                                                   <Select
                                                                     defaultValue={vaccinationStatus}
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
                                                                   <TextField defaultValue={ownerEmail} name="ownerEmail" type="email" isRequired>
                                                                     <Label>Owner Email</Label>
                                                                     <Input/>
                                                                     <FieldError />
                                                                   </TextField>
                                                                 </div>
                                                   
                                                                 {/* Image URL - Removed preview */}
                                                                 <div className="md:col-span-2">
                                                                   <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
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
                                                                   <TextField defaultValue={description} name="description" isRequired>
                                                                     <Label>Description</Label>
                                                                     <TextArea
                                                                       placeholder="Describe the travel experience..."
                                                                       className="rounded-3xl"
                                                                     />
                                                                     <FieldError />
                                                                   </TextField>
                                                                 </div>
                                                               </div>

                                                               <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save Details</Button>
            </Modal.Footer>
                                                   
                                                               
                                                             </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}