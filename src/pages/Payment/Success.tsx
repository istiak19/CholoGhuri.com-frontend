import { useSearchParams } from "react-router";

const Success = () => {
    const [searchParams] = useSearchParams();

    const transactionId = searchParams.get("transactionId");
    const amount = searchParams.get("amount");
    const status = searchParams.get("status");
    const message = searchParams.get("message");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold text-foreground mb-4">Payment Successful</h2>
            <p className="text-muted-foreground">{message}</p>
            <div className="mt-4 space-y-2 text-muted-foreground">
                <p><strong>Transaction ID:</strong> {transactionId}</p>
                <p><strong>Status:</strong> {status}</p>
                <p><strong>Amount:</strong> {amount} BDT</p>
            </div>
        </div>
    );
};

export default Success;