import {
    Card,
    CardContent,
    CardDescription,

    CardFooter,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
const DataCard = ({ d }) => {
    return (
        <div >
            <Card className='h-full hover:transition-all hover:fade-in-5'>
                <CardHeader>
                    <CardTitle className='text-lg'>{d?.title}</CardTitle>
                    <CardDescription>{d?.brand}</CardDescription>


                </CardHeader>
                <CardContent >
                    <CardDescription>$ {d?.price}</CardDescription>
                    <CardDescription>{d?.description}</CardDescription>
                </CardContent>

            </Card>
        </div>
    );
};

export default DataCard;