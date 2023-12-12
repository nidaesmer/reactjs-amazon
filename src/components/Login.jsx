import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-white flex flex-col items-center justify-center ">
      <Link to={"/"}>
        <img
          className="h-[75px] w-[300px] object-contain"
          src={"../images/amazon-2.png"}
          alt=""
        />
      </Link>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col p-4 border rounded border-black/20 max-w-xs"
      >
        <h1 className="text-2xl mb-2">Giriş Yap</h1>
        <div className="flex flex-col">
          <label className="font-semibold text-xs" htmlFor="email">
            E-Posta
          </label>
          <input
            className="bg-white border rounded border-black/30 text-sm py-1"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-xs text-red-700">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col mt-2">
          <label className="font-semibold text-xs" htmlFor="şifre">
            Şifre
          </label>
          <input
            className="bg-white border rounded border-black/30 text-sm py-1"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-xs text-red-700">{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="btn flex items-center justify-center w-full text-xs py-2"
        >
          Giriş
        </button>
        <p className="flex flex-col mt-2 text-xs">
          Oturum açarak, Amazon'un Kullanım ve Satış Koşulları'nı kabul etmiş
          olursunuz. Kişisel verilerinizin Amazon tarafından nasıl işlendiğine
          ilişkin detaylı bilgi için Gizlilik Bildirimi , Çerez Bildirimi ve
          İlgi Alanına Dayalı Tanıtımları inceleyebilirsiniz.
        </p>

        <p className="flex flex-col mt-2 text-xs text-blue-600 hover:underline hover:text-yellow-500 cursor-pointer">
          Yardıma mı ihtiyacınız var?
        </p>
      </form>

      <div className="w-full h-[1px] bg-black/20 mt-20 drop-shadow-xl  "></div>
      <div className="mt-4">
        <ul
          className="flex flex-row gap-x-4 text-xs text-blue-600 
        "
        >
          <li className="hover:underline hover:text-yellow-500 ">
            <a href="#"> Kullanım Koşulları </a>
          </li>
          <li className="hover:underline hover:text-yellow-500">
            <a href="#"> Gizlilik Bildirimi </a>
          </li>
          <li className="hover:underline hover:text-yellow-500">
            <a href="#"> Yardım </a>
          </li>
          <li className="hover:underline hover:text-yellow-500">
            <a href="#"> Yasal Bildirim </a>
          </li>
          <li className="hover:underline hover:text-yellow-500">
            <a href="#"> Çerezler Bildirimimiz </a>
          </li>
        </ul>
        <p className="text-xs text-center text-gray-700 mt-4">
          © 1996-2023, Amazon.com, Inc. veya bağlı kuruluşları
        </p>
      </div>
    </div>
  );
};

export default Login;
