import React from "react";
import Button from "./Button";
import ContactItem from "./ContactItem";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import TextField from "./TextField";

function Contact() {
  const items = [
    {
      id: 1,
      label: "Mail",
      icon: "/img/mail.svg",
      value: "contact@reza.co.id",
      className: "mt-10",
    },
    {
      id: 2,
      label: "Phone",
      icon: "/img/phone.svg",
      value: "082213027918",
      className: "mt-10",
    },
    {
      id: 3,
      label: "Twitter",
      icon: "/img/twitter.svg",
      value: "@rezarizqi44",
      className: "mt-10",
    },
  ];
  return (
    <section id="contact" className="container mx-auto px-10 2xl:px-0">
      <div className="bg-primary-gray flex rounded-lg flex-wrap">
        <div className="md:w-6/12 w-full md:border-r-2 border-b-2 border-primary-gray-200">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <SectionTitle align="left">Contact</SectionTitle>
            <SectionSubTitle align="left">
              Beberapa cara menghubungi saya.
            </SectionSubTitle>

            {items.map((item) => (
              <ContactItem
                key={item.id}
                label={item.label}
                icon={item.icon}
                value={item.value}
                className={item.className}
              />
            ))}
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex -mx-4 flex-wrap">
              <div className="lg:w-6/12 w-full px-4">
                <TextField name="name" label="Name" />
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <TextField name="email" label="Email" />
              </div>

              <div className="w-full px-4">
                <TextField name="subject" label="Subject" />
              </div>
              <div className="w-full px-4">
                <TextField
                  name="message"
                  label="Message"
                  type="textarea"
                  className="h-40"
                />
              </div>
              <Button styles="ml-auto" variant="filledBlack">
                SEND
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
