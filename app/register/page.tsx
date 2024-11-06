'use client';
import { useRegisterForm } from '../hooks';

export default function Register() {
  const { state, handleChange, handleSubmit } = useRegisterForm();
  const { name, email, password, buttonText } = state;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type your name"
              className="input input-bordered w-full"
              value={name}
              onChange={handleChange('name')}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type your email"
              className="input input-bordered w-full"
              value={email}
              onChange={handleChange('email')}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={handleChange('password')}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-amber-400 w-full">{buttonText}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
