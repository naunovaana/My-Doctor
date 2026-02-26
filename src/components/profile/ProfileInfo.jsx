import React from "react";

export default function ProfileInfo({ user }) {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 my-12">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-textPrimary">
          Твојот Профил / Пациент
        </h2>
        <div className="space-y-3">
          <p>
            <span className="font-medium">Корисничко Име:</span> {user.username}
          </p>
          <p>
            <span className="font-medium">Email:</span> {user.email}
          </p>
        </div>
      </div>
    </section>
  );
}
