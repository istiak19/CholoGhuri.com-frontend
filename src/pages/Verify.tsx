/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";
import { useEffect, useState } from "react";
import { Dot } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useSentOtpMutation, useVerifyOtpMutation } from "@/redux/features/auth/auth.api";
import { toast } from "react-toastify";

const Verify = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state;
    const [sendOtp] = useSentOtpMutation();
    const [verifyOtp] = useVerifyOtpMutation();

    useEffect(() => {
        if (!email) {
            navigate("/");
        }
    }, [email, navigate]);

    const FormSchema = z.object({
        otp: z.string().min(6, { message: "Your one-time password must be 6 characters." }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: { otp: "" },
    });

    const [confirm, setConfirm] = useState(false);
    const [timer, setTimer] = useState(120);

    useEffect(() => {
        if (!email || !confirm) {
            return;
        };
        const timerId = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timerId);
    }, [email, confirm]);

    const handleSentOtp = async () => {
        const toastId = toast.loading("Sending OTP...");
        try {
            const res = await sendOtp({ email }).unwrap();
            if (res.success) {
                toast.dismiss(toastId);
                toast.success(res.message || "OTP sent successfully!");
                setConfirm(true);
                setTimer(120);
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error?.data?.message || "Something went wrong while sending the OTP.");
        }
    };

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const toastId = toast.loading("Verifying OTP...");
        const userInfo = { email, otp: data.otp };
        try {
            const res = await verifyOtp(userInfo).unwrap();
            if (res.success) {
                toast.dismiss(toastId);
                toast.success(res.message || "OTP verified successfully!");
                navigate("/");
            };
        } catch (error: any) {
            console.error(error);
            toast.error(error?.data?.message || "Something went wrong while verifying the OTP.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-muted px-4">
            {confirm ? (
                <Card className="w-full max-w-md shadow-lg rounded-2xl p-6 border border-chart-1">
                    <CardHeader className="text-center space-y-1">
                        <CardTitle className="text-2xl font-semibold">Email Verification</CardTitle>
                        <CardDescription className="text-muted-foreground text-sm">
                            Please enter the 6-digit code sent to{" "}
                            <span className="font-medium">{email}</span>
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-6">
                                <FormField
                                    control={form.control}
                                    name="otp"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="sr-only">One-Time Password</FormLabel>
                                            <FormControl>
                                                <InputOTP maxLength={6} {...field} className="mx-auto">
                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={0} />
                                                        <InputOTPSlot index={1} />
                                                        <InputOTPSlot index={2} />
                                                        <Dot />
                                                        <InputOTPSlot index={3} />
                                                        <InputOTPSlot index={4} />
                                                        <InputOTPSlot index={5} />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </FormControl>
                                            <FormDescription className="text-center mt-2 text-sm text-muted-foreground">
                                                {timer > 0 ? (
                                                    <>You can resend the code in <strong>{timer}s</strong></>
                                                ) : (
                                                    <>Didn’t get the code? <button type="button" onClick={handleSentOtp} className="text-primary underline cursor-pointer">Resend</button></>
                                                )}
                                            </FormDescription>
                                            <FormMessage className="text-center" />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="px-12 cursor-pointer">Verify</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            ) : (
                <Card className="w-full max-w-md shadow-lg rounded-2xl p-6 border border-chart-1">
                    <CardHeader className="text-center space-y-1">
                        <CardTitle className="text-2xl font-semibold">Verify Your Email</CardTitle>
                        <CardDescription className="text-muted-foreground text-sm">
                            We’ve sent a 6-digit verification code to{" "}
                            <span className="font-medium">{email}</span>. Please enter it below to continue.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Button onClick={handleSentOtp} className="px-12 cursor-pointer">Send Code</Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default Verify;