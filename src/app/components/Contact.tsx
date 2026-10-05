import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";

export function Contact() {
  const [contactDetailsOpen, setContactDetailsOpen] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Always open to discussing data engineering challenges, AI integrations, or internship &amp; full-time opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Button
              variant="outline"
              className="w-full justify-between"
              aria-expanded={contactDetailsOpen}
              aria-controls="contact-details"
              onClick={() => setContactDetailsOpen((open) => !open)}
            >
              Contact me
              <ChevronDown
                className={`h-4 w-4 transition-transform ${contactDetailsOpen ? "rotate-180" : ""}`}
              />
            </Button>

            {contactDetailsOpen && (
              <div id="contact-details" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <h4>Email</h4>
                        <a
                          className="text-muted-foreground hover:text-primary transition-colors"
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=gaikemansi03%40gmail.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          gaikemansi03@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <h4>Phone</h4>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <h4>Location</h4>
                        <p className="text-muted-foreground">Available for Remote Work</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}