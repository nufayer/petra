"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlert({ _id }) {

  const router = useRouter();

  const handleDelete = async () => {

  console.log("CLICKED DELETE");
  console.log("_id:", _id);

  try {

    const res = await fetch(`http://localhost:5000/pet/${_id}`, {
      method: "DELETE",
    });

    console.log("FETCH RESPONSE:", res);

    const data = await res.json();

    console.log("DELETE DATA:", data);

    if (data.deletedCount > 0) {
      alert("Deleted Successfully");
      router.push("/all-pets");
    }

  } catch (error) {

    console.log("DELETE ERROR:", error);

  }
};

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="rounded-none mt-5 mb-3 text-red-700 border-red-700"
      >
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete pet permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete this pet and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>

              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
              >
                Delete Pet
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}