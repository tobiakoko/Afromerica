import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { AlertDialogAction, AlertDialogDescription, AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import Link from "next/link";

const EventAlert = () => {

    return (
        <AlertDialog>
            <AlertDialogContent className="bg-orange-50 text-center">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-3xl md:text-4xl font-bold text-orange-600">
                        Upcoming Showdown: Lagos Street Audition</AlertDialogTitle>
                    <AlertDialogDescription className="text-lg text-gray-700 mb-6">
                        Join us live at Tafawa Balewa Square - music, dance, comedy & cultural fusion. Be there!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction className="bg-orange text-white text-lg shadow-xl"><Link href="#">View Event Schedule</Link></AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export { EventAlert };