export default function Home() {
  return (
    <div className="w-full min-h-screen max-w-3xl mx-auto flex flex-col items-center  my-20 p-4 text-left gap-4">
      <h1 className="">EFG Consultant Online Quoting Instruction</h1>
      <h2 className="text-left mt-10">1. Google extension installation</h2>
      <span className="mt-4">
        {`To use the Google extension, you need a Google account. Once you have
        one, ask the tech person to add you to the user list.`}
      </span>
      <span>
        {` An invite will be sent to your Gmail, so you’ll need to log in with the
        Google account you just created. Sometimes the email may end up in your
        spam folder, so be sure to check there as well. After accepting the
        invite, you’ll be able to install the extension.`}
      </span>
      
      <span><b>IMPORTANT</b>{`: You must be logged into the Google account that was invited in order to use the extension. If you're not logged in, or if you're using a different account, you won't be authorized to use the extension.`}</span>
      <span className="mt-6">
        Once you are added to the list please open this{" "}
        <a
          className="text-blue-500 hover:underline"
          href="https://chromewebstore.google.com/detail/api-token-generator/oafjdkagoflkicbnemhgefccinlmpidn"
          target="_blank"
        >
          link
        </a>{" "}
        to the Google Extension Store listing for the extension.
      </span>
      <video className="mt-4" src={"installation.mov"} controls></video>
      <span className="mt-4">
        Congratulation you have succesfully installed the extension.
      </span>

      <h2 className="text-left mt-10">2. Create a quote on Scoro</h2>
      <span className="mt-4">
        {`To add services to your quote, we recommend using Scoro’s 'Add Template'
        feature. Templates come with pre-defined services, including preset
        prices and hours, helping ensure consistency and accuracy in your
        quotes.`}
      </span>
      <span>
        Using a template not only streamlines the quoting process but also
        simplifies the generation of the online form. Once a template is added,
        Scoro will automatically insert the relevant services along with their
        associated subheadings into your quote.
      </span>
      <video className="mt-4" src={"create-quote.mov"} controls></video>
      <span className="mt-6 font-semibold text-lg">
        A. To add a service to your quote:
      </span>
      <ol className="list-decimal pl-5">
        <li>
          Click the dropdown menu located in the upper left-hand corner, next to
          the Save button.
        </li>
        <li>Select the desired service template from the list.</li>
        <li>
          When prompted with “Do you want to add the lines from the selected
          quote template to this quote?”, click Yes.
        </li>
      </ol>
      <span className="mt-2">
        The selected service, along with its subheading, will automatically be
        added to your quote.
      </span>
      <span>
        Subheadings are essential when creating a quote,{" "}
        <b>without them, services will not appear on the online form.</b>
      </span>

      <div className="border border-solid border-neutral-200 rounded-xl overflow-hidden shadow my-4">
        <img src="heading-item.png" alt="heading-item" />
      </div>
      <span>
        <b>Each service must have a subheading placed directly above it.</b> If
        a service is added without a corresponding subheading, or if a
        subheading is left on its own without a service, neither will be
        displayed on the final online form.
      </span>
      <div className="border border-solid border-neutral-200 rounded-xl overflow-hidden shadow my-4">
        <img src="valid-and-invalid.png" alt="heading-item" />
      </div>
      <span>
        Be sure to review your quote to ensure every service is properly grouped
        under a subheading.
      </span>

      <span className="mt-6 font-semibold text-lg">
        B. Removing a service from your quote:
      </span>
      <span>
        To remove a service, you must also delete the subheading associated with
        it. The most efficient way to do this is by deleting the subheading and
        selecting “Delete the whole subsection.” This will remove both the
        subheading and the related service at the same time, keeping your quote
        clean and organized.
      </span>
      <div className="border border-solid border-neutral-200 rounded-xl overflow-hidden shadow my-4">
        <img src="delete-item.png" alt="heading-item" />
      </div>

      <span className="mt-6 font-semibold text-lg">
        C. Selecting a client and contact person:
      </span>
      <span>
        When creating a new quote, you must select a company or client. The form
        will then allow the customer to edit their company name, address,
        contact information, and invoice details.
      </span>
      <div className="border border-solid border-neutral-200 rounded-xl overflow-hidden shadow my-4">
        <img src="select-company.png" alt="heading-item" />
      </div>
      <span>
       {` You can choose whether or not to add a contact person. This contact will
        appear as the 'Accounts Payable' on the online form.`}
      </span>
      <div className="border border-solid border-neutral-200 rounded-xl overflow-hidden shadow my-4">
        <img src="select-person.png" alt="heading-item" />
      </div>
      <span>
        If the customer edits the payable details, a new contact will be created
        for the company and associated with the quote. If not, the contact
        person you selected will remain as the payable and stay linked to the
        quote.
      </span>

      <h2 className="text-left mt-10">3. Generate an online form</h2>
      <span className="mt-4">
        To generate an online form, you’ll need to use the Google extension.
        Each form URL can only be used once, and it will be deactivated after
        submission. Only one active online form is allowed per quote. If a new
        form is generated, the previous one will be deactivated automatically.
      </span>
      <video className="my-4" src={"online-quote.mov"} controls></video>
      <span>
        {`The extension can be used anywhere, but it works best on the quote
        detail page in Scoro. When you're on that page, the quote ID will be
        automatically pre-filled—so you don’t have to worry about entering the
        wrong number.`}
      </span>
      <span>
       {` However, if you're not on the quote detail page, you’ll need to manually
        retrieve and enter the quote ID. The quote number can be found at the
        end of the URL on the quote detail page.`}
      </span>

      <span>
       {` To generate an online proposal form, first make sure the ID field is
        filled. Then, choose between a "Full Quote" or an "Exact Quote."`}
      </span>
      <span className="mt-6 font-semibold text-lg">A. Full Quote:</span>
      <span>
        This quote includes both your standard Scoro products and optional
        add-on items that customers can choose to include. These additional
        items are not part of the original Scoro quote—they are only added if
        selected by the customer.
      </span>
      <span>
        This setup is ideal for offering extra services without needing to
        manually update your Scoro system.
      </span>
      <span>
        Please note: Pricing for these optional items is pulled directly from
        the quote templates in Scoro. If you edit a template, the pricing will
        update across all related quotes.
      </span>
      <span>There are 7 default services:</span>
      <ol className="list-decimal pl-10 space-y-2 mt-2">
        <li>
          OWMP Premium —
          <a
            href="https://elephantsfootconsulting.scoro.com/quotes/templates/modify/109"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://elephantsfootconsulting.scoro.com/quotes/templates/modify/109
          </a>
        </li>
        <li>
          C&amp;D WMP —
          <a
            href="https://elephantsfootconsulting.scoro.com/quotes/templates/modify/110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://elephantsfootconsulting.scoro.com/quotes/templates/modify/110
          </a>
        </li>
        <li>
          C&amp;D WMP Premium —
          <a
            href="https://elephantsfootconsulting.scoro.com/quotes/templates/modify/113"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://elephantsfootconsulting.scoro.com/quotes/templates/modify/113
          </a>
        </li>
        <li>
          Technical Design Support —
          <a
            href="https://elephantsfootconsulting.scoro.com/quotes/templates/modify/209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://elephantsfootconsulting.scoro.com/quotes/templates/modify/209
          </a>
        </li>
        <li>
          Waste Management Plan Amendment —
          <a
            href="https://elephantsfootconsulting.scoro.com/quotes/templates/modify/118"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://elephantsfootconsulting.scoro.com/quotes/templates/modify/118
          </a>
        </li>
        <li>
          Out of Office Meeting with Company Director —
          <a
            href="https://elephantsfootconsulting.scoro.com/quotes/templates/modify/121"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://elephantsfootconsulting.scoro.com/quotes/templates/modify/121
          </a>
        </li>
        <li>
          Teleconference Meeting with Assigned Consultant —
          <a
            href="https://elephantsfootconsulting.scoro.com/quotes/templates/modify/119"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://elephantsfootconsulting.scoro.com/quotes/templates/modify/119
          </a>
        </li>
      </ol>

      <span className="mt-6 font-semibold text-lg">B. Exact Quote:</span>
      <span>
        This quote will only display the items already included in your Scoro
        quote, with no additional items added through the online form. This
        option is suitable when you want to offer customers only the items
        listed in your existing Scoro quote.
      </span>
      <span>
        After selecting either “Full Quote” or “Exact Quote,” it may take a few
        moments for the URL to be generated. Once it’s ready, the URL will be
        displayed. You can click the button on the right side of the URL to copy
        it, allowing you to paste it wherever needed.
      </span>
      <span>
        {`The latest URL will also be added to your Scoro project. If you reload
        the page, you’ll find it under the "Details" section. Click the link to
        verify that the services are correctly rendered on the online proposal
        form.`}
      </span>
      <div className="border border-solid border-neutral-200 rounded-xl overflow-hidden shadow mt-2">
        <img src="save-url.png" alt="save-url" />
      </div>
      <span>
       {` Once you're satisfied, send the link to the customer. They can use the
        form to make their selections. Once submitted, your Scoro quote will be
        updated—only the selected services will be saved, and any unselected
        items will be removed.`}
      </span>
      <span>
        Need to make changes before sending the form? If you amend the quote
        before sending out the link, the form will update automatically. Just
        reload the form to reflect the changes.
      </span>
      <span>
        Need to change the quote after sending the form? You’ll need to generate
        a new link and send it again. The previous form will be invalidated.
      </span>

      <h2 className="text-left mt-10">
        4. What happen after the online form is submitted
      </h2>
      <span className="mt-6 font-semibold text-lg">A. Services</span>
      <span>
        The subheadings and service items that the customer did not choose will
        be removed from the Scoro quote. The services that the customer selected
        will be saved to the Scoro quote and can be found in the contract PDF,
        which will also be uploaded to Scoro.
      </span>
      <span className="mt-6 font-semibold text-lg">
        B. Customer Information
      </span>
      <span>
        Information such as company name, ABN, phone number, email, invoice
        contact phone, invoice email, and address can be edited through the
        online form.
      </span>
      <span>
        When the form is first generated, this information will be prefilled
        based on what’s currently stored on Scoro. If the customer determines
        that the prefilled details do not accurately represent their business,
        they can edit the fields directly in the form. The updated information
        will then be saved to Scoro, replacing the old details.
      </span>
      <div className="border border-solid border-neutral-200 rounded-xl overflow-hidden shadow mt-2">
        <img src="company-detail-after.png" alt="old company" />
      </div>

      <span>
        If the team created a new customer in Scoro but didn’t fill in all the
        company information, those fields will appear blank in the online form.
        The customer will be required to provide the missing information, which
        will then be saved to Scoro under the company you just created.
      </span>
      <span>
        Note: When creating a new quote for a new customer, you must first
        create a company in Scoro. You can choose to enter the company’s details
        yourself or allow the customer to fill them in via the online form.
      </span>
      <div className="border border-solid border-neutral-200 rounded-xl overflow-hidden shadow mt-2">
        <img src="old-company.png" alt="old company" />
      </div>
      <span>
        Note: If the customer edits their business name, the original name you
        entered will be saved to a custom field called{" "}
        <strong>{`"Original Lead Name."`}</strong>
      </span>
      <span>
        This ensures you can still recognize the quote, even if the customer
        changes their company name.
      </span>

      <span className="mt-6 font-semibold text-lg">
        C. Fee Proposal Aggreement Signed PDF
      </span>
      <div className="border border-solid border-neutral-200 rounded-xl overflow-hidden shadow mt-2">
        <img src="pdf-location.png" alt="pdf location" />
      </div>
      <span>
        When the form is submitted, a signed PDF is automatically generated and
        uploaded to Scoro under the corresponding quote.
      </span>
      <span>
        You can find it on the quote details page under the{" "}
        <strong>Files</strong> section.
      </span>
      <span>
        This PDF file will contain all the information provided by the customer
        through the online form, making it convenient for you to retrieve
        specific details and amend any missing information in Scoro.
      </span>
      <span className="mt-6 font-semibold text-lg">
        D. Project / Architect Information
      </span>
      <span>
        Project and architect information can be found on the Scoro quote
        details page under the <strong>Comments</strong> section.
      </span>

      <span className="mt-6 font-semibold text-lg">
        E. Quote Status
      </span>
      <span>
      {`  Once the online form is submitted, the quote status will automatically
        change to "Won", so you will need to filter for won quote when you want to find it on Scoro.`}
      </span>

      <span className="mt-6 font-semibold text-lg">
        F. Notification
      </span>
      <span>
        Once the online form is submitted, an email will be sent to the team, and an email will be sent to customer, both email will contain the signed PDF.
      </span>

      <h2 className="text-left mt-10">5. Additional Notes</h2>
      <ol className="list-decimal pl-10 space-y-4 mt-2">
        <li>
          If the price for the Green Star Report 8A or 8B is not set, it will
          not be selectable by the customer. In this case, the customer will
          need to contact the salesperson. The salesperson can then adjust the
          form and generate a new online form to send to the customer.{" "}
        </li>
        <li>
          On full quote online form, if the price of Green Star Report 8A or 8B
          is not set they will not be selectable.{" "}
        </li>
      </ol>
    </div>
  );
}
