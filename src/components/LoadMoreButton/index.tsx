"use client";

import Button from "../ui/button";

export default function LoadMoreButton() {
  return (
    <Button
      content="Carregar mais"
      onPress={() => {
        console.log("Funcionando!");
      }}
    />
  );
}
