import React from "react";
import Footer from "../../layouts/client/footer";
import Header from "../../layouts/client/header";

export default function ChangePassword() {
  return (
    <>
      <Header />
      <div className="bg-black text-white pt-20 xl:pt-28 pb-10 xl:pb-20 px-4 xl:px-0">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold mb-10 text-center">
            Đổi mật khẩu mới
          </h3>
          <div className="w-[500px] mx-auto">
            <div className="space-y-4">
              <form autoComplete="off">
                <div className="mt-5">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":rc:-form-item"
                    >
                      Mật khẩu mới
                    </label>
                    <input
                      className="text-black flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Mật khẩu mới"
                      autoComplete="off"
                      id=":rc:-form-item"
                      aria-describedby=":rc:-form-item-description"
                      aria-invalid="false"
                      type="password"
                      defaultValue=""
                      name="NewPassword"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="space-y-2">
                    <label
                      className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":rd:-form-item"
                    >
                      Xác nhận mật khẩu mới
                    </label>
                    <input
                      className="text-black flex h-14 w-full rounded-[10px] border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Xác nhận mật khẩu mới"
                      autoComplete="off"
                      id=":rd:-form-item"
                      aria-describedby=":rd:-form-item-description"
                      aria-invalid="false"
                      type="password"
                      defaultValue=""
                      name="ConfirmNewPassword"
                    />
                  </div>
                </div>
                <div className="mt-8 w-full">
                  <button
                    className="bg-red-00 inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-danger text-destructive-foreground hover:bg-blue-500 h-10 px-8 py-2 w-full"
                    type="submit"
                  >
                    Xác nhận
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
