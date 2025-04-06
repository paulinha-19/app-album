import React, { useState } from "react";
import { TokenPasswordModal } from "../ContentBaseModal/TokenPasswordModal";
import { ResetPasswordModal } from "../ContentBaseModal/ResetPasswordModal";

interface PasswordRecoveryProps {
  showTokenModal: boolean;
  setShowTokenModal: (visible: boolean) => void;
  showResetPasswordModal: boolean;
  setShowResetPasswordModal: (visible: boolean) => void;
}

export default function PasswordRecovery({
  showTokenModal,
  setShowTokenModal,
  showResetPasswordModal,
  setShowResetPasswordModal,
}: PasswordRecoveryProps) {
  const handleTokenSubmit = () => {
    setShowTokenModal(false);
    setShowResetPasswordModal(true);
  };

  return (
    <>
      <TokenPasswordModal visible={showTokenModal} onClose={() => setShowTokenModal(false)} onTokenSubmit={handleTokenSubmit} />
      <ResetPasswordModal visible={showResetPasswordModal} onClose={() => setShowResetPasswordModal(false)} />
    </>
  );
}
