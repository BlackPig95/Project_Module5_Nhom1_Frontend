import React from "react";
// import "./index.scss";

const RegisterForm = ({ closeForm, openLoginForm }) => {
  return (
    <>
      <div
        data-state="open"
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        style={{ pointerEvents: "auto" }}
        data-aria-hidden="true"
        aria-hidden="true"
      />
      <div
        role="dialog"
        id="radix-:r3:"
        aria-describedby="radix-:r5:"
        aria-labelledby="radix-:r4:"
        data-state="open"
        className="bg-black text-white fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-7 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl md:w-full max-w-xl"
        tabIndex={-1}
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2
            id="radix-:r4:"
            className="text-2xl font-bold leading-none tracking-tight"
          >
            Đăng ký
          </h2>
          <p id="radix-:r5:" className="text-sm text-muted-foreground" />
        </div>
        <div className="overflow-auto">
          <div>
            <div className="space-y-4">
              <form className="overflow-y-auto">
                <div className="flex items-center gap-5">
                  <div className="space-y-2 w-full">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":rm:-form-item"
                    >
                      Họ
                    </label>
                    <input
                      className="flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Họ"
                      id=":rm:-form-item"
                      aria-describedby=":rm:-form-item-description"
                      aria-invalid="false"
                      defaultValue=""
                      name="FirstName"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":rn:-form-item"
                    >
                      Tên
                    </label>
                    <input
                      className="flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tên"
                      autoComplete="off"
                      id=":rn:-form-item"
                      aria-describedby=":rn:-form-item-description"
                      aria-invalid="false"
                      defaultValue=""
                      name="LastName"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="space-y-2 w-full">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":ro:-form-item"
                    >
                      Tên tài khoản
                    </label>
                    <input
                      className="flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tên tài khoản"
                      autoComplete="off"
                      id=":ro:-form-item"
                      aria-describedby=":ro:-form-item-description"
                      aria-invalid="false"
                      defaultValue=""
                      name="Username"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <div className="space-y-2 w-full">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":rp:-form-item"
                    >
                      Số điện thoại
                    </label>
                    <input
                      className="flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Số điện thoại"
                      autoComplete="off"
                      id=":rp:-form-item"
                      aria-describedby=":rp:-form-item-description"
                      aria-invalid="false"
                      defaultValue=""
                      name="Mobile"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":rq:-form-item"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Email"
                      autoComplete="off"
                      id=":rq:-form-item"
                      aria-describedby=":rq:-form-item-description"
                      aria-invalid="false"
                      defaultValue=""
                      name="Email"
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-5">
                  <div className="space-y-2 w-full">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":rr:-form-item"
                    >
                      Mật khẩu
                    </label>
                    <input
                      className="flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Mật khẩu"
                      autoComplete="off"
                      id=":rr:-form-item"
                      aria-describedby=":rr:-form-item-description"
                      aria-invalid="false"
                      type="password"
                      defaultValue=""
                      name="Password"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":rs:-form-item"
                    >
                      Xác nhận mật khẩu
                    </label>
                    <input
                      className="flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Xác nhận mật khẩu"
                      autoComplete="off"
                      id=":rs:-form-item"
                      aria-describedby=":rs:-form-item-description"
                      aria-invalid="false"
                      type="password"
                      defaultValue=""
                      name="ConfirmPassword"
                    />
                  </div>
                </div>
                <div className="mt-8 w-full">
                  <button
                    style={{
                      background:
                        "linear-gradient(90deg, #ff0000 0%, #ff5657 100%)",
                    }}
                    className="hover:[linear-gradient(90deg, #ff5657  0%, #ff0000  100%)] inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 w-full"
                    type="submit"
                  >
                    Đăng ký
                  </button>
                </div>
                <p className="mt-8 text-center text-sm">
                  Bạn đã có tài khoản?{" "}
                  <a
                    className="text-red-500 hover:underline cursor-pointer"
                    onClick={openLoginForm}
                  >
                    Đăng nhập
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={closeForm}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
};

export default RegisterForm;
