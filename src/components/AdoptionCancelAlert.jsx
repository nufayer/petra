"use client";

import {AlertDialog, Button} from "@heroui/react";

export function AdoptionCancelAlert({adoptionId}) {

    const handleCancelAdoption = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoption/${adoptionId}`, {
            method: 'DELETE',       
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    
    window.location.reload();
    // You can add a toast notification here to inform the user about the cancellation
    }


  return (
    <AlertDialog>
      <Button className={'rounded-none border-red-700 text-red-700'} variant='outline'>Cancel</Button>   
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Adoption Request permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel<strong>this Adoption Request</strong>
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancelAdoption} slot="close" variant="danger">
                Confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}