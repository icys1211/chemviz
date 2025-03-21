import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card"
import { formatPrice } from "lib/format";

export const DataCard = ({
    value,
    label,
    shouldFormat = true,
}) => {

    return (
        <Card>
            <CardHeader className="flex flex-row  items-center justify-between space-y-0 pb-2">
                <CardTitle>
                    {label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {shouldFormat ? formatPrice(value) : value}
                </div>
            </CardContent>
        </Card>

    )
}