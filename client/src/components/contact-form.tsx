import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertCoupleInquirySchema, insertPlannerInquirySchema } from "@shared/schema";
import type { InsertCoupleInquiry, InsertPlannerInquiry } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ContactFormProps {
  type: "couple" | "planner";
}

export default function ContactForm({ type }: ContactFormProps) {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();

  const isCoupleForm = type === "couple";
  const schema = isCoupleForm ? insertCoupleInquirySchema : insertPlannerInquirySchema;

  const form = useForm<InsertCoupleInquiry | InsertPlannerInquiry>({
    resolver: zodResolver(schema),
    defaultValues: isCoupleForm
      ? { names: "", email: "", phone: "", weddingDate: "", location: "", message: "" }
      : { name: "", company: "", email: "", phone: "", service: "both", message: "" }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertCoupleInquiry | InsertPlannerInquiry) => {
      const endpoint = isCoupleForm ? "/api/inquiries/couple" : "/api/inquiries/planner";
      await apiRequest("POST", endpoint, data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertCoupleInquiry | InsertPlannerInquiry) => {
    mutation.mutate(data);
  };

  return (
    <div
      ref={ref}
      className={`bg-card p-8 lg:p-12 rounded-lg shadow-xl transition-all duration-1000 ${
        type === "couple" ? "" : "delay-200"
      } ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${type === "couple" ? "-translate-x-10" : "translate-x-10"}`}`}
    >
      <div className="flex items-center gap-3 mb-8">
        {isCoupleForm ? (
          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
        )}
        <h3 className="font-heading text-3xl md:text-4xl">{isCoupleForm ? "For Couples" : "For Planners"}</h3>
      </div>
      <p className="text-muted-foreground mb-8">
        {isCoupleForm 
          ? "Share your love story with us, and let's create something magical together."
          : "Let's collaborate to create unforgettable experiences for your clients."
        }
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {isCoupleForm ? (
            <>
              <FormField
                control={form.control}
                name="names"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Your Names</FormLabel>
                    <FormControl>
                      <Input {...field} className="form-input" data-testid="input-couple-names" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} className="form-input" data-testid="input-couple-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} className="form-input" data-testid="input-couple-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weddingDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Wedding Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="form-input" data-testid="input-couple-date" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Wedding Location</FormLabel>
                    <FormControl>
                      <Input {...field} className="form-input" data-testid="input-couple-location" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Tell Us Your Story</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={4} className="form-input resize-none" data-testid="textarea-couple-message" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          ) : (
            <>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Your Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="form-input" data-testid="input-planner-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Company Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="form-input" data-testid="input-planner-company" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} className="form-input" data-testid="input-planner-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} className="form-input" data-testid="input-planner-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Service Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="form-input" data-testid="select-planner-service">
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="photography">Photography Only</SelectItem>
                        <SelectItem value="videography">Videography Only</SelectItem>
                        <SelectItem value="both">Both Services</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="meta-text text-xs">Project Details</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={4} className="form-input resize-none" data-testid="textarea-planner-message" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <Button
            type="submit"
            className="w-full btn-primary bg-primary text-primary-foreground py-4 meta-text text-sm"
            disabled={mutation.isPending}
            data-testid={`button-submit-${type}`}
          >
            {mutation.isPending ? "Sending..." : isCoupleForm ? "Send Inquiry" : "Submit Partnership Inquiry"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
