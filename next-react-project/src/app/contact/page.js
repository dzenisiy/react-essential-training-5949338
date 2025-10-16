export default function Page() {
  async function submitForm(formData) {
    "use server";
    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("formFields", formFields);
    console.log("TODO: send these values to a backend");
    return formFields;
  }

  return (
      <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <div>
          <h1 className="text-2xl font-bold text-center mb-6">Contact
            Details</h1>
          <form className="space-y-4" action={submitForm}>
            <div>
              <label htmlFor="email"
                     className="block text-sm font-medium text-gray-700">Email</label>
              <input
                  id="email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="mail@mail.com"
                  required
                  className="border border-b border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "/>
            </div>
            <div>
              <label htmlFor="message"
                     className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message"
                        name="message"
                        id="message"
                        placeholder="Message"
                        required rows="4"
                        className="border border-b  border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "/>
            </div>
            <button type="submit" className="text-white bg-blue-600 rounded-md p3">Submit</button>
          </form>
        </div>
      </main>
  );
}