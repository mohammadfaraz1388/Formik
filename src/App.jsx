import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
const initialValues = {
  firstName: "",
  lastName: "",
  number: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required().min(3).max(20),
  lastName: Yup.string().required().min(3).max(50),
  number: Yup.number().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
function App() {

  const [darkMode, setDarkMode] = useState(true);
  
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log("Form information : ", values);
      alert("Your information has been recorded!");
      resetForm();
    },
    validationSchema,
  });
  return (
    <>
      {" "}
      <div className="min-h-screen overflow-hidden bg-black px-4 py-8 text-white transition-colors duration-500 sm:px-6 lg:px-8">
        {" "}
        {/* Background Glow */}{" "}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {" "}
          <div className="absolute -left-32 -top-32 h-80 w-80 animate-pulse rounded-full bg-blue-600/20 blur-[120px]" />{" "}
          <div className="absolute -bottom-32 -right-32 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-[140px]" />{" "}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />{" "}
        </div>{" "}
        {/* Main Container */}{" "}
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
          {" "}
          {/* Dark / Light Button */}{" "}
          <button
            type="button"
            className="absolute right-0 top-0 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-blue-500/20"
          >
            {" "}
            <span className="text-lg">☾</span> <span>Dark</span>{" "}
          </button>{" "}
          {/* Main Card */}{" "}
          <div className="grid w-full overflow-hidden rounded-4xl border border-white/10 bg-white/[0.04] shadow-[0_0_80px_rgba(0,100,255,0.08)] backdrop-blur-2xl transition-all duration-500 hover:border-blue-500/20 lg:grid-cols-2">
            {" "}
            {/* Left Side - Form */}{" "}
            <div className="relative p-6 sm:p-10 lg:p-12">
              {" "}
              {/* Small Top Line */}{" "}
              <div className="mb-8 flex items-center gap-3">
                {" "}
                <div className="h-10 w-1 rounded-full bg-gradient-to-b from-blue-400 to-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />{" "}
                <div>
                  {" "}
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                    {" "}
                    Welcome{" "}
                  </p>{" "}
                  <h1 className="mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {" "}
                    Create Account{" "}
                  </h1>{" "}
                </div>{" "}
              </div>{" "}
              <p className="mb-8 max-w-md text-sm leading-6 text-gray-500">
                {" "}
                Fill out the form below carefully and create your account. Your
                information will appear live in the preview panel.{" "}
              </p>{" "}
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-5"
              >
                {" "}
                {/* First Name */}{" "}
                <div className="group">
                  {" "}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors duration-300 group-focus-within:text-blue-400">
                    {" "}
                    Firstname{" "}
                  </label>{" "}
                  <div className="relative">
                    {" "}
                    <input
                      type="text"
                      placeholder="Faraz"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      name="firstName"
                      onBlur={formik.handleBlur}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-blue-500/70 focus:bg-blue-500/[0.04] focus:shadow-[0_0_25px_rgba(59,130,246,0.12)]"
                    />{" "}
                    <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-500 group-focus-within:w-[90%]" />{" "}
                  </div>{" "}
                  {formik.errors.firstName && formik.touched.firstName && (
                    <p className="mt-2 flex items-center gap-1 text-xs font-medium text-rose-400">
                      {" "}
                      <span>⚠</span> {formik.errors.firstName}{" "}
                    </p>
                  )}{" "}
                </div>{" "}
                {/* Last Name */}{" "}
                <div className="group">
                  {" "}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors duration-300 group-focus-within:text-blue-400">
                    {" "}
                    Lastname{" "}
                  </label>{" "}
                  <div className="relative">
                    {" "}
                    <input
                      type="text"
                      placeholder="Emdadi"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      name="lastName"
                      onBlur={formik.handleBlur}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-blue-500/70 focus:bg-blue-500/[0.04] focus:shadow-[0_0_25px_rgba(59,130,246,0.12)]"
                    />{" "}
                    <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-500 group-focus-within:w-[90%]" />{" "}
                  </div>{" "}
                  {formik.errors.lastName && formik.touched.lastName && (
                    <p className="mt-2 flex items-center gap-1 text-xs font-medium text-rose-400">
                      {" "}
                      <span>⚠</span> {formik.errors.lastName}{" "}
                    </p>
                  )}{" "}
                </div>{" "}
                {/* Number */}{" "}
                <div className="group">
                  {" "}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors duration-300 group-focus-within:text-blue-400">
                    {" "}
                    Number{" "}
                  </label>{" "}
                  <div className="relative">
                    {" "}
                    <input
                      type="number"
                      placeholder="9374802514"
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      name="number"
                      onBlur={formik.handleBlur}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-blue-500/70 focus:bg-blue-500/[0.04] focus:shadow-[0_0_25px_rgba(59,130,246,0.12)]"
                    />{" "}
                    <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-500 group-focus-within:w-[90%]" />{" "}
                  </div>{" "}
                  {formik.errors.number && formik.touched.number && (
                    <p className="mt-2 flex items-center gap-1 text-xs font-medium text-rose-400">
                      {" "}
                      <span>⚠</span> {formik.errors.number}{" "}
                    </p>
                  )}{" "}
                </div>{" "}
                {/* Email */}{" "}
                <div className="group">
                  {" "}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors duration-300 group-focus-within:text-blue-400">
                    {" "}
                    Email{" "}
                  </label>{" "}
                  <div className="relative">
                    {" "}
                    <input
                      type="email"
                      placeholder="faraz1388@gmail.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      name="email"
                      onBlur={formik.handleBlur}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-blue-500/70 focus:bg-blue-500/[0.04] focus:shadow-[0_0_25px_rgba(59,130,246,0.12)]"
                    />{" "}
                    <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-500 group-focus-within:w-[90%]" />{" "}
                  </div>{" "}
                  {formik.errors.email && formik.touched.email && (
                    <p className="mt-2 flex items-center gap-1 text-xs font-medium text-rose-400">
                      {" "}
                      <span>⚠</span> {formik.errors.email}{" "}
                    </p>
                  )}{" "}
                </div>{" "}
                {/* Password */}{" "}
                <div className="group">
                  {" "}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors duration-300 group-focus-within:text-blue-400">
                    {" "}
                    Password{" "}
                  </label>{" "}
                  <div className="relative">
                    {" "}
                    <input
                      type="password"
                      placeholder="12345678"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password"
                      onBlur={formik.handleBlur}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-blue-500/70 focus:bg-blue-500/[0.04] focus:shadow-[0_0_25px_rgba(59,130,246,0.12)]"
                    />{" "}
                    <div className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-500 group-focus-within:w-[90%]" />{" "}
                  </div>{" "}
                  {formik.errors.password && formik.touched.password && (
                    <p className="mt-2 flex items-center gap-1 text-xs font-medium text-rose-400">
                      {" "}
                      <span>⚠</span> {formik.errors.password}{" "}
                    </p>
                  )}{" "}
                </div>{" "}
                {/* Submit */}{" "}
                <input
                  type="submit"
                  value="Create Account"
                  className="mt-3 w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-sm font-bold text-white shadow-[0_0_25px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-500 hover:to-cyan-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.45)] active:translate-y-0"
                />{" "}
              </form>{" "}
            </div>{" "}
            {/* Right Side - Live Preview */}{" "}
            <div className="relative flex flex-col justify-center overflow-hidden border-t border-white/10 bg-gradient-to-br from-blue-950/20 via-black/20 to-blue-900/10 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              {" "}
              {/* Decorative Glow */}{" "}
              <div className="absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />{" "}
              <div className="absolute bottom-[-100px] left-[-100px] h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />{" "}
              {/* Header */}{" "}
              <div className="relative mb-8">
                {" "}
                <div className="mb-3 flex items-center gap-2">
                  {" "}
                  <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,1)]" />{" "}
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    {" "}
                    Live Preview{" "}
                  </span>{" "}
                </div>{" "}
                <h2 className="text-2xl font-bold text-white">
                  {" "}
                  Your Information{" "}
                </h2>{" "}
                <p className="mt-2 text-sm text-gray-500">
                  {" "}
                  Everything you type appears here instantly.{" "}
                </p>{" "}
              </div>{" "}
              {/* Preview Card */}{" "}
              <div className="relative rounded-2xl border border-white/10 bg-black/30 p-5 shadow-2xl backdrop-blur-xl">
                {" "}
                {/* Firstname */}{" "}
                <div className="flex items-center justify-between border-b border-white/[0.06] py-4">
                  {" "}
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {" "}
                    Firstname{" "}
                  </span>{" "}
                  <span className="max-w-[60%] truncate text-sm font-semibold text-blue-400">
                    {" "}
                    {formik.values.firstName || "—"}{" "}
                  </span>{" "}
                </div>{" "}
                {/* Lastname */}{" "}
                <div className="flex items-center justify-between border-b border-white/[0.06] py-4">
                  {" "}
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {" "}
                    Lastname{" "}
                  </span>{" "}
                  <span className="max-w-[60%] truncate text-sm font-semibold text-blue-400">
                    {" "}
                    {formik.values.lastName || "—"}{" "}
                  </span>{" "}
                </div>{" "}
                {/* Number */}{" "}
                <div className="flex items-center justify-between border-b border-white/[0.06] py-4">
                  {" "}
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {" "}
                    Number{" "}
                  </span>{" "}
                  <span className="max-w-[60%] truncate text-sm font-semibold text-blue-400">
                    {" "}
                    {formik.values.number || "—"}{" "}
                  </span>{" "}
                </div>{" "}
                {/* Email */}{" "}
                <div className="flex items-center justify-between border-b border-white/[0.06] py-4">
                  {" "}
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {" "}
                    Email{" "}
                  </span>{" "}
                  <span className="max-w-[60%] truncate text-sm font-semibold text-blue-400">
                    {" "}
                    {formik.values.email || "—"}{" "}
                  </span>{" "}
                </div>{" "}
                {/* Password */}{" "}
                <div className="flex items-center justify-between py-4">
                  {" "}
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {" "}
                    Password{" "}
                  </span>{" "}
                  <span className="max-w-[60%] truncate text-sm font-semibold tracking-widest text-blue-400">
                    {" "}
                    {formik.values.password
                      ? "•".repeat(formik.values.password.length)
                      : "—"}{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              {/* Bottom Status */}{" "}
              <div className="relative mt-6 flex items-center justify-between rounded-xl border border-blue-500/10 bg-blue-500/[0.04] px-4 py-3">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />{" "}
                  <span className="text-xs font-medium text-gray-400">
                    {" "}
                    Form is active{" "}
                  </span>{" "}
                </div>{" "}
                <span className="text-xs font-bold text-blue-400">
                  {" "}
                  LIVE{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
export default App;
