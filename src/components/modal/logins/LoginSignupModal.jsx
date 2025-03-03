const LoginSignupModal = () => {
    return (
      <>
        <dialog id="my_modal_3" className="modal px-4 md:px-0">
          <div className="modal-box w-full max-w-md p-6 bg-white rounded-3xl shadow-lg">
            {/* Close Button */}
            <form method="dialog">
              <button className="absolute top-4 right-4 cursor-pointer">
                <img
                  src="https://www.svgrepo.com/show/528912/close-circle.svg"
                  className="h-6 w-6"
                  alt="Close"
                />
              </button>
            </form>
  
            {/* Modal Header */}
            <div className="flex justify-center text-lg font-semibold">
              Log in or Sign up
            </div>
  
            {/* Modal Content */}
            <div className="py-6 space-y-4">
              <form>
                <div className="flex items-center gap-2">
                  <select className="select select-bordered w-1/3 text-xs">
                    <option value="+1">US (+1)</option>
                    <option value="+44">UK (+44)</option>
                  </select>
                  <input
                    type="text"
                    className="input input-bordered w-full text-xs"
                    placeholder="Enter Number"
                    required
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  We’ll call or text you to confirm your number. Standard message and data rates apply.
                  <span className="font-semibold underline"> Privacy Policy</span>
                </p>
                <button className="btn btn-primary w-full mt-4">Continue</button>
              </form>
  
              <div className="divider text-xs">OR</div>
              <div className="text-xs text-center">Continue with</div>
  
              <div className="grid grid-cols-2 gap-2">
                <button className="btn btn-outline w-full flex gap-2">
                  <img src="./src/assets/images/svg/google.svg" className="w-5 h-5" alt="Google" /> Google
                </button>
                <button className="btn btn-outline w-full flex gap-2">
                  <img src="./src/assets/images/svg/apple-logo.svg" className="w-5 h-5" alt="Apple" /> Apple
                </button>
                <button className="btn btn-outline w-full flex gap-2">
                  <img src="./src/assets/images/svg/mail.svg" className="w-5 h-5" alt="Email" /> Email
                </button>
                <button className="btn btn-outline w-full flex gap-2">
                  <img src="./src/assets/images/svg/facebook.svg" className="w-5 h-5" alt="Facebook" /> Facebook
                </button>
              </div>
            </div>
          </div>
  
          {/* Click Outside to Close */}
          <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form>
        </dialog>
      </>
    );
  };
  
  export default LoginSignupModal;
  